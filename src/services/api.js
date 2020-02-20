
export default async function getAPISpecs() {
    const albums = await fetch('/data/data.json');
    return albums.json();
}