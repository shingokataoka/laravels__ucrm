import { useEffect } from 'react'
export default function ApplicationLogo(props) {
    useEffect(() => {
        console.log(props)
    }, [])
    return (<>
        <img src="/images/logo.png" className={props.className} />
    </>
);
}
