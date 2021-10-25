import './PrimaryNavigationLink.css';

function PrimaryNavigationLink({ url, text }) {
  return (
    <a className="PrimaryNavigationLink" href={ url }>{ text }</a>
  );
}

export default PrimaryNavigationLink;
