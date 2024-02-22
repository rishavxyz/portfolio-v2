import { scryptSync, randomBytes } from "node:crypto";
import Database from "better-sqlite3";

export class Auth {
  password(password:string) {
    const hashed_password = scryptSync(password, import.meta.env.PRIVATE_KEY, 64);

    return {
      verify: hashed_password.toString("hex") == import.meta.env.PRIVATE_PASSWORD
    }
  }
  createSession() {
    const id = randomBytes(64).toString("hex") + "__on__" + Date.now();

    const db = new Database("public/session.db");
    db.pragma("journal_mode = WAL");

    const doesTableExist = db.prepare(`Select name from sqlite_master
      where type='table' and name='session';
    `).get();
    
    if (!doesTableExist) {
      db.exec(`create table session (
        id text primary key
      );`);
      // console.log("DB: Table session created");
    }
    const doesIDExist = db.prepare(`Select id from session;`).get() as { id: string } | undefined;

    if (doesIDExist) {
      // console.log(`DB: id '${doesIDExist.id}' exists`);
      
      db.close();
      return doesIDExist.id
    }
    const s = db.prepare(`Insert into session (id) values (?);`).run(id);
    // console.log("DB: inserted into session id:",id,"\nLog:", s);
    
    db.close();
    return id;
  } 
  getSession(id: string|undefined) {
    if (!id) return undefined;

    const db = new Database("public/session.db", { readonly: true });
    db.pragma("journal_mode = WAL");

    const doesIDExist = db.prepare(`select id from session where id = (?)`).get(id) as { id: string } | undefined;

    db.close();

    if (!doesIDExist) return undefined;
    if (doesIDExist.id == id) return doesIDExist.id;
    return undefined;
  }
}