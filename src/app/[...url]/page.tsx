interface pageProps {
    params: {
        url: string | string[] | undefined
    }
}

const page = ({params}: pageProps) => {
    return (

    <div>Hello Brother!</div>
  )
}

export default page
