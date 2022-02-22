import 'isomorphic-fetch';

const API_STACKEXCHANGE_BASE_URL = 'https://api.stackexchange.com/2.3';

const userIds = {
    'stackoverflow': 3866134,
    'es.stackoverflow': 6095,
    'gis.stackexchange': 63028
}

const filters = {
    answers: '!3upZ1Rmw_GXrKplFp',
    questions: '!)rmjGBCuuhQHj90UK*I-'
}

const defaultParams = {
    order: 'desc',
    sort: 'votes',
}

export type StackExchangeSite = keyof typeof userIds;

export type StackOverflowUserResource = 'questions' | 'answers';

export declare interface StackOverflowQuestion {
    title: string
    score: number
}

export declare interface StackOverflowAnswer {
    title: string
    score: number
}

export declare interface StackOverflowResponse<T> {
    items: T[]
}

export type AllResponse = { [K in StackExchangeSite]: { questions: StackOverflowAnswer[], answers: StackOverflowAnswer[] } };

export async function getAllStackoverflowData(): Promise<AllResponse> {
    const communities = Object.keys(userIds) as StackExchangeSite[];

    const communitiesData = await Promise.all(communities.map(site => getFeaturedData(site)));

    return communities.reduce(
        (result, site, index) => ({ ...result, [site]: communitiesData[index] }),
        {} as AllResponse
    );
}

export async function getFeaturedData(site: StackExchangeSite) {
    const [questions, answers] = await Promise.all([
        getFeaturedQuestions(site),
        getFeaturedAnswers(site)
    ]);

    return {
        questions,
        answers
    }
}

export function getFeaturedQuestions(site: StackExchangeSite) {
    return getStackExchangeResourceData<StackOverflowQuestion>('questions', site);
}

export function getFeaturedAnswers(site: StackExchangeSite) {
    return getStackExchangeResourceData<StackOverflowAnswer>('answers', site);
}


async function getStackExchangeResourceData<T>(resource: StackOverflowUserResource, site: StackExchangeSite): Promise<T[]> {
    const userId = userIds[site];
    const url = new URL(`${API_STACKEXCHANGE_BASE_URL}/users/${userId}/${resource}`);
    const filter = filters[resource];
    const params = new URLSearchParams({ ...defaultParams, filter, site });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8')

    console.log('Fetching...', `${url}?${params}`);

    const data = await fetch(`${url}?${params}`, { headers })
        .then(response => response.json())
        .then((stackoverflowResponse: StackOverflowResponse<T>) => stackoverflowResponse.items);

    // console.log({ data });

    return data;
}