import Link from 'next/link'

export default function ArtistGallery() {
    return (
        <div>
            <Link href="/artist/1">Artist 1</Link>
            <br />
            <Link href="/artist/2">Artist 2</Link>
            <br />
            <Link href="/artist/3">Artist 3</Link>
        </div>
    )
}
