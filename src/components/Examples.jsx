import { useState } from 'react';
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from './Section';
import Tabs from './Tabs';

export default function Examples () {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }
  
  {/* Alternative way of rendering component conditionally */}
  let tabContent = <p>Please select a topic</p>;
  
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
 
  return (
    // <section id="examples">
    //   <h2>Examples</h2>
    //   <menu>
    //     <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
    //       Components
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
    //       JSX
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
    //       Props
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
    //       State
    //     </TabButton>
    //   </menu>

    //   {/* <div id="tab-content">
    //     <h3>{EXAMPLES[selectedTopic].title}</h3>
    //     <p>{EXAMPLES[selectedTopic].description}</p>
    //     <pre>
    //       <code>{EXAMPLES[selectedTopic].code}</code>
    //     </pre>
    //   </div> */}

    // {/* Rendering component conditionally */}
    //   {/* {!selectedTopic ? ( 
    //     <p>Please select a topic</p>
    //   ) : (
    //     <div id="tab-content">
    //       <h3>{EXAMPLES[selectedTopic].title}</h3>
    //       <p>{EXAMPLES[selectedTopic].description}</p>
    //       <pre>
    //         <code>{EXAMPLES[selectedTopic].code}</code>
    //       </pre>
    //     </div>
    //   )} */}

    // {/* Alternative way of rendering component conditionally */}
    //   {/* {!selectedTopic && <p>Please select a topic</p>}
    //   {selectedTopic && (
    //     <div id="tab-content">
    //       <h3>{EXAMPLES[selectedTopic].title}</h3>
    //       <p>{EXAMPLES[selectedTopic].description}</p>
    //       <pre>
    //         <code>{EXAMPLES[selectedTopic].code}</code>
    //       </pre>
    //     </div>
    //   )} */}

    // {/* Alternative way of rendering component conditionally */}
    //   {tabContent}
    // </section>

    // <Section title="Examples" id="examples">
    //   <menu>
    //     <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
    //       Components
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
    //       JSX
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
    //       Props
    //     </TabButton>
    //     <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
    //       State
    //     </TabButton>
    //   </menu>
    //   {tabContent}
    // </Section>

    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu" //setting components types dynamically.
        // Use string for buit in elements (like menu, div, p, etc.), e.g name="div"
        // Use curly bracket for custom components, e.g. name={Section}
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
             Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
              State
            </TabButton> 
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  ); 
}
