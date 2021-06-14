import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ptBR  from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import { RiArrowRightSLine } from 'react-icons/ri';
import { CgLoadbarSound } from 'react-icons/cg';
import { BiPlay } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { api } from '../services/api';
import { usePlayer } from '../contexts/PlayerContext';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import { HomeContainer, LatestEpisodes, AllEpisodes } from '../styles/pages/home';


interface Episode {
    id: string;
    title: string;
    thumbnail: string;
    members: string;
    publishedAt: string;
    duration: number;
    url: string;
    durationAsString: string;
}

interface HomeProps {
    latestEpisodes: Episode[];
    allEpisodes: Episode[];
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
    const { isOpened, episodeList, currentEpisodeIndex, isPlaying, playList } = usePlayer()

    const episode = episodeList[currentEpisodeIndex]

    const epList = [
        ...latestEpisodes,
        ...allEpisodes
    ]

    return (
        <HomeContainer className={isOpened && 'PlayerOpened'}>
            <Head>
                <title>Home | RocketCast</title>
            </Head>

            <LatestEpisodes>
                <h2>Últimos lançamentos</h2>

                <RiArrowRightSLine className="sliderArrow" />

                <ul>
                    {latestEpisodes.map((ep, index) => {
                        return (
                            <motion.li 
                                key={ep.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: [0, 1], y: 0 }}
                                transition={{ duration: 0.8, delay: index/5 }}
                            >
                                <Image 
                                    width={200}
                                    height={192}
                                    src={ep.thumbnail}
                                    alt={ep.title}
                                    objectFit="cover"
                                />

                                <motion.div className="episodeDetails">
                                    <Link href={`/episodes/${ep.id}`}>
                                        <a>{ep.title}</a>
                                    </Link>
                                    <p>{ep.members}</p>
                                    <span>{ep.publishedAt}</span>
                                    <span>{ep.durationAsString}</span>
                                </motion.div>

                                {ep.title === episode?.title  && isPlaying
                                    ? (
                                        <button className="playingBtn">
                                            <CgLoadbarSound />
                                        </button>
                                    )
                                    : (
                                        <button type="button" className="playBtn" onClick={() => playList(epList, index)}>
                                            <BiPlay />
                                        </button>
                                    )
                                }
                            </motion.li>
                        )
                    })}
                </ul>
            </LatestEpisodes>

            <AllEpisodes>
                <h2>Todos episódios</h2>

                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th className="tableHidden"></th>
                            <th>Podcast</th>
                            <th className="tableHidden">Integrantes</th>
                            <th className="tableHiddenSecond">Data</th>
                            <th>Duração</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allEpisodes.map((ep, index) => {
                            return (
                                <tr key={ep.id}>
                                    <td className="tableHidden" style={{ width: 72 }}>
                                        <Image 
                                            width={150}
                                            height={120}
                                            src={ep.thumbnail}
                                            alt={ep.title}
                                            objectFit="cover"
                                        />
                                    </td>

                                    <td>
                                        <Link href={`/episodes/${ep.id}`}>
                                            <a>{ep.title}</a>
                                        </Link>
                                    </td>

                                    <td className="tableHidden">
                                        {ep.members}
                                    </td>

                                    <td className="tableHiddenSecond" style={{ width: 100 }}>
                                        {ep.publishedAt}
                                    </td>

                                    <td style={{ textAlign: 'center' }}>
                                        {ep.durationAsString}
                                    </td>

                                    <td>
                                        {ep.title === episode?.title && isPlaying
                                            ? (
                                                <CgLoadbarSound 
                                                    style={{ transform: 'scale(2.5)', marginLeft: '0.5rem', color: 'var(--pink-500)' }}
                                                /> 
                                            )  
                                            : (
                                                <button type="button" onClick={() => playList(epList, index + latestEpisodes.length)}>
                                                    <BiPlay /> 
                                                </button>
                                            )
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </AllEpisodes>
        </HomeContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('episodes', {
        params: {
            _limit: 12,
            _sort: 'published_at',
            _order: 'desc',
        }
    })

    const episodes = data.map(ep => {
        return {
            id: ep.id,
            title: ep.title,
            thumbnail: ep.thumbnail,
            members: ep.members,
            publishedAt: format(parseISO(ep.published_at), 'd MMM yy', { locale : ptBR }),
            duration: Number(ep.file.duration),
            durationAsString: convertDurationToTimeString(Number(ep.file.duration)),
            url: ep.file.url,
        }
    })

    const latestEpisodes = episodes.slice(0, 3);
    const allEpisodes = episodes.slice(3, episodes.length)

    return {
        props: {
            latestEpisodes,
            allEpisodes,
        },
        revalidate: 60 * 60 * 24, // 24h
    }
}