import React from 'react';
import ReactDOM from 'react-dom';
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import jsonDefinition from "./assets/training_definition-id25.json"
import jsonEvents1 from "./assets/events/training_run-id210-events1.json"
import jsonEvents2 from "./assets/events/training_run-id210-events2.json"
import jsonEvents3 from "./assets/events/training_run-id210-events3.json"
import jsonEvents4 from "./assets/events/training_run-id210-events4.json"
import jsonEvents5 from "./assets/events/training_run-id210-events5.json"
import ReactJson from 'react-json-view';

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

class JSON extends React.Component {
    render() {
        return (
            <div>
                <ReactJson src={jsonDefinition}
                           collapsed={1}
                           name={false}
                           theme={"shapeshifter:inverted"}
                           enableClipboard={false}
                />
            </div>
        );
    }
}

class EventJSON extends React.Component {
    render() {
        return (
            <div>
                <ReactJson src={jsonEvents1}
                           collapsed={1}
                           name={false}
                           theme={"shapeshifter:inverted"}
                           enableClipboard={false}
                />
                <SingleEvent event={jsonEvents2}/>
                <SingleEvent event={jsonEvents3}/>
                <SingleEvent event={jsonEvents4}/>
                <SingleEvent event={jsonEvents5}/>
            </div>
        );
    }
}

const SingleEvent = (event) => {
    return (
    <ReactJson src={event.event}
               collapsed={0}
               name={false}
               theme={"shapeshifter:inverted"}
               enableClipboard={false}
    />
    )
}

ReactDOM.render(
    <JSON />,
    document.getElementById('json')
);

ReactDOM.render(
    <EventJSON />,
    document.getElementById('event-json')
);