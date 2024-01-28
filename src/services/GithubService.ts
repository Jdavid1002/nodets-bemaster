export interface IRepositorie {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  };
  html_url: string;
  description: string;
  fork: boolean;
}


interface IGetGithubRepositories {
  user: string
  per_page: number
}

export interface ISummaryRepositories {
  url: string
  nombre: string
  creador: string
  index : number
}

export const getGithubRepositories = async (params: IGetGithubRepositories): Promise<ISummaryRepositories[]> => {

  if (!params.user || !params.per_page) {
    return []
  }

  try {
    const url = `https://api.github.com/users/${params.user}/repos?per_page=${params.per_page}&sort=stars&direction=desc`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (response.ok) {

      const repositories: unknown | IRepositorie[]  = await response.json();

      //@INFO: En caso de obtener algun error en la consulta o los repositorios vacios.
      if (!Array.isArray(repositories)) {
        console.error(`Error al obtener repositorios: ${response.status} - ${response.statusText}`);
        return []
      }

      const summaryRepositories : ISummaryRepositories[] = repositories.map((repo: IRepositorie, index : number) => {
        return {
          url: repo?.html_url || '',
          nombre: repo?.name || '',
          creador: repo?.owner?.login || '',
          index : index + 1
        };
      });


      return summaryRepositories

    } else {
      console.error(`Error al obtener repositorios: ${response.status} - ${response.statusText}`);
      return [];
    }
  } catch (error: any) {
    console.error(`Error de red: ${error.message}`);
    return [];
  }
}
