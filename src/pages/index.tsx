import { GetStaticProps } from 'next';
import Head from 'next/head';

import ptBR  from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BiPlay } from 'react-icons/bi';

import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import { HomeContainer, LatestEpisodes, AllEpisodes } from '../styles/pages/home';


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

interface HomeProps {
    latestEpisodes: Episode[];
    allEpisodes: Episode[];
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
    return (
        <HomeContainer>
            <Head>
                <title>Home | RocketCast</title>
            </Head>

            <LatestEpisodes>
                <h2>Últimos lançamentos</h2>

                <RiArrowRightSLine className="sliderArrow" />

                <ul>
                    {latestEpisodes.map(ep => {
                        return (
                            <li key={ep.id}>
                                <img src={ep.thumbnail} alt={ep.title} />

                                <div className="episodeDetails">
                                    <a href="">{ep.title}</a>
                                    <p>{ep.members}</p>
                                    <span>{ep.publishedAt}</span>
                                    <span>{ep.durationAsString}</span>
                                </div>

                                <button type="button">
                                    <BiPlay />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </LatestEpisodes>

            <AllEpisodes>
                <h2>Todos episódios</h2>

                <table cellSpacing={0}>
                    <thead>
                        <th className="tableHidden"></th>
                        <th>Podcast</th>
                        <th className="tableHidden">Integrantes</th>
                        <th className="tableHiddenSecond">Data</th>
                        <th>Duração</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {allEpisodes.map(ep => {
                            return (
                                <tr key={ep.id}>
                                    <td className="tableHidden" style={{ width: 72 }}>
                                        <img src={ep.thumbnail} alt={ep.title} />
                                    </td>

                                    <td>
                                        <a href="">
                                            {ep.title}
                                        </a>
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
                                        <button type="button">
                                            <BiPlay />
                                        </button>
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
            _limit: 13,
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
            description: ep.description,
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
        }
    }
}