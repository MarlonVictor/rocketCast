import { GetStaticProps } from 'next';

import { api } from '../services/api';

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
    durationString: string;
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

    return {
        props: {
            episodes: data,
        }
    }
}