export default function ArtistPage({
    params
} : {
    params: {pageId: string}}) {
        
    return <h1>Hello Artist Page {params.pageId}</h1>
}