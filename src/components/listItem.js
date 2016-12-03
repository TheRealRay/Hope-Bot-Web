// Stateless functional component (component with only render method)

export default function ListItem(props) {
  return (
    <li class="listItem">
      <h2>
        {props.timestamp}
      </h2>
      <p>
        {props.entryText}
      </p>
    </li>
  );
}
