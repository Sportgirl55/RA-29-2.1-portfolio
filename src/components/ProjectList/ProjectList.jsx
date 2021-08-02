import './ProjectList.css'

export default function ProjectList(props) {
  return (
    <ul className="projects-list">
      {props.filter.map((image, id) => (
        <li key={id}>
           <img src={image.img} category={image.category}  alt={image.category} />
        </li>
      ))}
    </ul>
  )
}







