function Main() { 
    return (
      <div className="max-w-xl w-80 w-full mr-8">

          <p className="hidden" id="fullText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget posuere enim. Nulla facilisi. Phasellus justo massa, pharetra eu aliquet vel, aliquet vitae turpis. Donec hendrerit neque vitae congue auctor. Integer vel scelerisque tellus, vitae vestibulum tellus. Duis sit amet interdum neque. Sed vestibulum, nibh ut ultricies luctus, orci turpis vulputate ex, ut semper elit orci ac nulla. Donec eget finibus erat, nec consequat mauris. Duis lacinia, elit at suscipit cursus, lectus est ultricies nisi, eget auctor urna lectus a nisi. Proin sollicitudin magna sit amet magna efficitur vulputate. Phasellus a dolor eu magna convallis pharetra. Quisque eget nunc quis magna luctus vestibulum. Sed eleifend nisl quis erat varius, ac blandit neque vulputate. Phasellus semper pellentesque egestas. Aliquam tincidunt lacinia sapien quis ultrices. Vivamus rutrum fermentum cursus. Aliquam tortor nisl, molestie a metus in, porta tempus dui. Maecenas porta dapibus lectus viverra dignissim. Cras facilisis tortor ut orci mattis posuere. Duis non purus sodales, auctor arcu et, fermentum justo. Sed consequat felis et sodales tempus. Curabitur in massa nec tellus vestibulum posuere. Donec quis pulvinar lorem. Integer commodo viverra dui a volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer id nibh aliquet, feugiat orci ut, sollicitudin est. Sed id felis vitae quam suscipit porttitor vel ut est. Sed id lacus nisi. Vestibulum ut porta arcu, vitae vehicula ipsum. Ut quis risus at est bibendum tempus. Donec sit amet urna felis. Quisque placerat vitae orci vel ultrices. Nullam quam odio, sagittis a augue iaculis, facilisis varius justo. Nam egestas consequat purus vitae fermentum. Aliquam fringilla dui et erat suscipit, at aliquam augue venenatis. Aliquam ornare felis velit, pellentesque volutpat ante interdum et. In luctus nulla vel congue consectetur. In sagittis nibh sit amet nunc gravida, sed laoreet lacus dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent erat arcu, tincidunt quis lacinia ac, scelerisque nec ligula. Donec at diam fringilla, ullamcorper orci eu, placerat massa. Aliquam scelerisque facilisis nisl at dignissim. Pellentesque ornare a mi sed iaculis. Sed vitae quam rutrum, aliquet ante pulvinar, lacinia eros. Etiam eu tellus sed justo sagittis fringilla sed eget urna. Etiam sem purus, tincidunt et ultrices in, lobortis ac velit. Curabitur vel dolor nec magna feugiat mollis.</p>
            
          <div>

            <p className="font-mono mb-10" id="bodyText" onClick={getSelectedInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget posuere enim. Nulla facilisi. Phasellus justo massa, pharetra eu aliquet vel, aliquet vitae turpis. Donec hendrerit neque vitae congue auctor. Integer vel scelerisque tellus, vitae vestibulum tellus. Duis sit amet interdum neque. Sed vestibulum, nibh ut ultricies luctus, orci turpis vulputate ex, ut semper elit orci ac nulla.</p>

            <p className="font-mono mb-10" id="bodyText" onClick={getSelectedInfo}>Donec eget finibus erat, nec consequat mauris. Duis lacinia, elit at suscipit cursus, lectus est ultricies nisi, eget auctor urna lectus a nisi. Proin sollicitudin magna sit amet magna efficitur vulputate. Phasellus a dolor eu magna convallis pharetra. Quisque eget nunc quis magna luctus vestibulum. Sed eleifend nisl quis erat varius, ac blandit neque vulputate. Phasellus semper pellentesque egestas. Aliquam tincidunt lacinia sapien quis ultrices. Vivamus rutrum fermentum cursus.</p>

            <p className="font-mono mb-10" id="bodyText" onClick={getSelectedInfo}>Aliquam tortor nisl, molestie a metus in, porta tempus dui. Maecenas porta dapibus lectus viverra dignissim. Cras facilisis tortor ut orci mattis posuere. Duis non purus sodales, auctor arcu et, fermentum justo. Sed consequat felis et sodales tempus. Curabitur in massa nec tellus vestibulum posuere. Donec quis pulvinar lorem. Integer commodo viverra dui a volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

            <p className="font-mono mb-10" id="bodyText" onClick={getSelectedInfo}>Integer id nibh aliquet, feugiat orci ut, sollicitudin est. Sed id felis vitae quam suscipit porttitor vel ut est. Sed id lacus nisi. Vestibulum ut porta arcu, vitae vehicula ipsum. Ut quis risus at est bibendum tempus. Donec sit amet urna felis. Quisque placerat vitae orci vel ultrices. Nullam quam odio, sagittis a augue iaculis, facilisis varius justo. Nam egestas consequat purus vitae fermentum. Aliquam fringilla dui et erat suscipit, at aliquam augue venenatis. Aliquam ornare felis velit, pellentesque volutpat ante interdum et. In luctus nulla vel congue consectetur. In sagittis nibh sit amet nunc gravida, sed laoreet lacus dapibus.</p>

            <p className="font-mono" id="bodyText" onClick={getSelectedInfo}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent erat arcu, tincidunt quis lacinia ac, scelerisque nec ligula. Donec at diam fringilla, ullamcorper orci eu, placerat massa. Aliquam scelerisque facilisis nisl at dignissim. Pellentesque ornare a mi sed iaculis. Sed vitae quam rutrum, aliquet ante pulvinar, lacinia eros. Etiam eu tellus sed justo sagittis fringilla sed eget urna. Etiam sem purus, tincidunt et ultrices in, lobortis ac velit. Curabitur vel dolor nec magna feugiat mollis.</p>

          </div>
      </div>
    );
  }

  function getSelectedText() {
    const selection = window.getSelection();
    return selection;
  }

  function getSelectedInfo() {
    const selected = getSelectedText();

    const bodyText = document.getElementById('fullText').innerHTML;
    let startIndex = selected.anchorOffset;
    let endIndex = selected.focusOffset;
    let parentEl = selected.anchorNode.parentElement;

    if (startIndex > endIndex) { // if user selects backwards
      const temp = startIndex;
      startIndex = endIndex;
      endIndex = temp;
    }

    while (parentEl.previousSibling) {
      startIndex += parentEl.previousSibling.innerText.length +1;
      endIndex += parentEl.previousSibling.innerText.length +1;
      parentEl = parentEl.previousSibling;
    }

    const selectedText = bodyText.slice(startIndex, endIndex);
    
    console.log(selectedText, startIndex, endIndex)
    
  }
  
  export default Main;