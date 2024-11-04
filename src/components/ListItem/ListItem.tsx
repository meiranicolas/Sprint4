import './ListItem.css'
const ListItem = ({title, linkTo}: {title: string, linkTo: string}) => {
    return (
        <>
        <li className='as'>
             <a className='Perguntas' href={linkTo}>{title}</a>
         </li>
        </>
    )
}

export default ListItem