import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { BiPlay } from 'react-icons/bi';
import { RiArrowLeftSLine } from 'react-icons/ri';

import { api } from '../../services/api';
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { EpisodeContainer } from '../../styles/pages/episode';


interface Episode {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    publishedAt: string;
    duration: number;
    description: string;
    url: string;
    durationAsString: string;
}

interface SlugProps {
    episode: Episode
}

export default function Slug({ episode }: SlugProps) {
    const { isOpened, play } = usePlayer()

    return (
        <EpisodeContainer className={isOpened && 'PlayerOpened'}>
            <section>
                <Head>
                    <title>{episode.title}</title>
                </Head>
                
                <div className="thumbnail">
                    <Link href="/">
                        <button type="button">
                            <RiArrowLeftSLine />
                        </button>
                    </Link>
                    <Image 
                        width={700}
                        height={160}
                        src={episode.thumbnail}
                        alt={episode.title}
                        objectFit="cover"
                    />

                    <button type="button" onClick={() => play(episode)}>
                        <BiPlay />
                    </button>
                </div>

                <header>
                    <h1>{episode.title}</h1>
                    <span>{episode.members}</span>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                </header>

                <div 
                    className="description" 
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                />
            </section>
        </EpisodeContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('episodes', {
        params: {
            _limit: 3,
            _sort: 'published_at',
            _order: 'desc'
        }
    })

    const paths = data.map((path: Episode) => {
        return {
            params: {
                slug: path.id
            }
        }
    })
  
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params

    const { data } = await api.get(`/episodes/${slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale : ptBR }),
        duration: Number(data.file.duration),
        description: data.description,
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        url: data.file.url,
    }

    return {
        props: {
            episode,
        },
        revalidate: 60 * 60 * 24, // 24h
    }
}