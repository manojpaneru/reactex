import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function Concepts() {
  return (
    // <section id="core-concepts">
    //   <h2>Core Concepts</h2>
    //   {/* <ul>
    //     <CoreConcept
    //       title={CORE_CONCEPTS[0].title}
    //       description={CORE_CONCEPTS[0].description}
    //       image={CORE_CONCEPTS[0].image}
    //     />
    //     <CoreConcept
    //       title={CORE_CONCEPTS[1].title}
    //       description={CORE_CONCEPTS[1].description}
    //       image={CORE_CONCEPTS[1].image}
    //     />
    //     <CoreConcept
    //       title={CORE_CONCEPTS[2].title}
    //       description={CORE_CONCEPTS[2].description}
    //       image={CORE_CONCEPTS[2].image}
    //     />
    //     <CoreConcept
    //       title={CORE_CONCEPTS[3].title}
    //       description={CORE_CONCEPTS[3].description}
    //       image={CORE_CONCEPTS[3].image}
    //     />
    //   </ul> */}

    // {/* alternative approach: {...CORE_CONCEPTS[0]} -> spread operator pull out all the key
    //   value pair of an object */}
    //   {/* <ul>
    //     <CoreConcept {...CORE_CONCEPTS[0]} />
    //     <CoreConcept {...CORE_CONCEPTS[1]} />
    //     <CoreConcept {...CORE_CONCEPTS[2]} />
    //     <CoreConcept {...CORE_CONCEPTS[3]} />
    //   </ul> */}

    // {/* alternative approach by using map */}
    //   <ul>
    //     {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    //   </ul>
    // </section>

    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
      </ul>
    </Section>
  );
}
