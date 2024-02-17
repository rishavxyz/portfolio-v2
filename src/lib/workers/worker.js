import vibrant from "node-vibrant";

self.onmessage = async e => {
  console.log("Worker spawned");

  const { src } = e.data;

  if (!src) postMessage({ error: "No source found", color: null });

  else try {
    const palette = await vibrant.from(src).useQuantizer(vibrant.Quantizer.WebWorker).getPalette(); 
    
    const color = palette.LightVibrant?.getRgb() ?? [245, 245, 245];

    postMessage({ error: null, color })
  } catch (error) {
    postMessage({ error, color: null })
  }
}
