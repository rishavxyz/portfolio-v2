const id = "basic-linux-commands.md";
						const collection = "blog";
						const slug = "basic-linux-commands";
						const body = "\nLinux, the open-source operating system, offers a powerful command-line interface that allows users to perform a wide range of tasks efficiently. In this article, we'll explore five essential Linux commands: `find`, `grep`, `awk`, `ip`, and `sudo`, along with practical examples for each.\n\n## 1. find\n\nThe `find` command is a versatile tool for searching files and directories in the Linux filesystem. Here's an example:\n\n```bash\nfind /home/user/documents -name \"*.txt\"\n```\n\nThis command searches the `/home/user/documents` directory and its subdirectories for files with a `.txt` extension.\n\n## 2. grep\n\n`grep` is a text search tool that allows you to search for specific patterns or words in files. For instance:\n\n```bash\ngrep \"keyword\" file.txt\n```\n\nThis command searches for the word \"keyword\" in the `file.txt` and displays the lines containing the match.\n\n## 3. awk\n\n`awk` is a versatile text processing tool. You can use it to extract and manipulate data in files. Here's a simple example:\n\n```bash\nawk '{print $1}' data.txt\n```\n\nThis command extracts the first column of data from `data.txt` and prints it to the console.\n\n## 4. ip\n\nThe `ip` command is used to manage network interfaces and routing. To display network interface information:\n\n```bash\nip addr show\n```\n\nThis command shows details of all network interfaces on your system, including their IP addresses and status.\n\n## 5. sudo\n\n`sudo` allows users to execute commands with superuser privileges. For example:\n\n```bash\nsudo apt-get update\n```\n\nThis command updates the package list on a Debian-based system. `sudo` is essential for performing administrative tasks safely.\n\n## Conclusion\n\nThese essential Linux commands, `find`, `grep`, `awk`, `ip`, and `sudo`, form the foundation of efficient command-line usage. Whether you're searching for files, manipulating text, managing network interfaces, or performing administrative tasks, mastering these commands will empower you to navigate and control your Linux system with ease.\n";
						const data = {title:"Basic Linux commands to learn",desc:"The 5 Linux commands are essential to learn for everyone",pubon:new Date(1708021800000),img:
						new Proxy({"src":"/_astro/blog-placeholder-about.BtEdEmGp.jpg","width":960,"height":480,"format":"jpg","fsPath":"/home/rain/projects/portfolio-astro/src/media/blog-placeholder-about.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/rain/projects/portfolio-astro/src/media/blog-placeholder-about.jpg";
							}
							
							return target[name];
						}
					})
					,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/rain/projects/portfolio-astro/src/content/blog/basic-linux-commands.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
