const rootUrl = 'https://swapi.co/api';
export class DataFetch {
    public getData(model: string) {
        const fetchUrl = `${rootUrl}/${model}/?format=json`;
        return Promise.resolve(fetch(fetchUrl)).then((res) => {
          return res.json();
        })
        .catch((err) => err);
    }
}
