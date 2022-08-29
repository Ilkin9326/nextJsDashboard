import { useRouter } from 'next/router'

function PageNotFound(){
    const router = useRouter()
    return <p>Salam qaqa bele bir {router.asPath} adinda url yoxdu</p>
}

export default PageNotFound