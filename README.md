# Movie Log

Esse é um projeto desenvolvido com React.js e com Firebase para o serviço de autentificação, que tem como objetivo permitir que o usuário veja uma lista de filmes consumidas da API do [TMDB](https://www.themoviedb.org/documentation/api) , e tenha a opção de fazer o login na página sendo possível montar sua lista de filmes.
  
- [x] Visualizar lista.
- [x] Ver uma página com informações detalhadas do filme.
- [x] Se autentificar via login ou se cadastrar.
- [x] Criar lista de favoritos e deletar itens.
- [x] Deslogar.
- [ ] Responsivo (Em desenvolvimento)


  - Link do Site-solução: [Movie Log](http://movie-log-inky.vercel.app/)

## Preview do produto final

![image](https://user-images.githubusercontent.com/104238483/198424337-924caa52-d7e5-41eb-bbd3-8b206b64f2f0.png)



### Página detalhada:

![image](https://user-images.githubusercontent.com/104238483/198424880-1f8e4b3b-efd0-44df-93b3-beda842f1492.png)


### Lista de filmes:

![image](https://user-images.githubusercontent.com/104238483/198425243-fd875360-dfe3-44e6-8dfc-f274449ef940.png)


## Detalhes do projeto: 

#### O projeto foi desenvolvido com react-router-dom para a roteirização das páginas

```
const Router = () => {
    const session = sessionStorage.getItem('@AuthFirebase:user');
    console.log(!!session);
    if(!!session){
        return (
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLoged />} path='/' />
                    <Route element={<MovieLoged />} path='movie/:id'/> 
                    <Route element={<Register />} path='/register'/>
                    <Route element={<Login />} path='/Login' />
                    <Route element={<MyList/>} path='/my-list' />
                </Routes>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Movie />} path='/movie/:id'/> 
                <Route element={<Register />} path='/register'/>
                <Route element={<Login />} path='/Login' />
            </Routes>
        </BrowserRouter>
    )
}
```

Acima temos o Route para o <Movie /> que recebe um path com o ID de forma dinâmica para abrir o usuário e exibir as informação do mesmo em especifico.

E uma lógica inicial que verifica se o usuário esá logado para apresentar as paginas privadas corretamente.

#### Para a autentificação, foi usado o firebase, junto cum a biblioteca firebase-hooks:

##### Configuração do firebase:

```
import * as firebase from 'firebase/app';
import { getAuth }from "firebase/auth";

const authConfig = firebase.initializeApp({
    apiKey: "AIzaSyB-nwAlBOc0D2j2ksvBgz-fKrIZcsiXYOE",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = getAuth(authConfig)
```

##### Login:

```
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const singIn = () => {
        signInWithEmailAndPassword(email, password)
    }
```
Quando a requisição retorna um usuário, a informação é salva no localStorage para depois ser usada na validação do Router.
```
if (user) {
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
        setLogged(true)
        return (
            <div>
              <Navigate to='/'/>
            </div>
          )
    }
```

##### Cadastro:

```
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signUp = () => {
        createUserWithEmailAndPassword(email, password)
    }
```

#### Metodos para consumo da API

Para as requisições HTTP, utilizamos o metodo fetch():

```
const getMovies = async () => {
        if(search.length === 0){
            try {
                const data = await fetch(`${urlBase}${filter}?api_key=${apiKey}&page=${currentPage}`);
                const json = await data.json();
                console.log(json);
                setMovies(json.results);
                setTotalPages(json.total_pages)
            } catch (error) {
                console.log(error.message);
            }
        }else{
            try {
                const data = await fetch(`${searchUrl}?api_key=${apiKey}&query=${search}&page=${currentPage}`);
                const json = await data.json();
                console.log(json);
                setMovies(json.results);
                setTotalPages(json.total_pages)
            } catch (error) {
                console.log(error.message);
            }
        }
    }
```

#### Hooks

Para o controle de renderização da página e chamada da API, usamos os Hooks useState e useEffect. E Para trabalhar com a rota dinamica, utilizamos o useParams para captar o valor do id do objeto

#### Desenvolvimento 

Caso queira fazer o clone do repositório, por favor usar o comando abaixo para download das dependencias:
```
npm intall
```

Será necessário criar suas proprias chaves para o firebase para configuração.


