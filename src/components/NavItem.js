function navItem(props) { 
    return (
        <a href={props.linkLocation} className={props.classes}>{props.linkTitle}</a>
      
    );
  }
  
  export default navItem;