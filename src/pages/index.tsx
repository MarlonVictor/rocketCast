import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR  from 'date-fns/locale/pt-BR';

import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

import { HomeContainer } from '../styles/pages/home';


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
    episodes: Episode[];
}

export default function Home(props: HomeProps) {
    return (
        <HomeContainer>
            <h1>Hello World</h1>
            <img src={props.episodes[0].thumbnail} style={{ width: '450px' }} alt={props.episodes[0].title} />
            <p>{JSON.stringify(props.episodes[0].title)}</p>
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

    return {
        props: {
            episodes
        }
    }
}