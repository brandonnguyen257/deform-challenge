'use client'
import { getAllArtistPages } from '@/services/database/dao'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ArtistGallery() {
    // const [artistPages, setArtistPages] = useState([])

    useEffect(() => {
        const fetchArtistPages = async () => {
            const data = await getAllArtistPages()
            console.log(data)
        }

        fetchArtistPages()
    }, [])

    // rest of your component

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
