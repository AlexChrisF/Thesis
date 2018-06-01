async function trainOnRun(imageTags) {
  const dataset = new Dataset();
  dataset.loadFromArray(imageTags);
  await run(dataset);
  return null;
}