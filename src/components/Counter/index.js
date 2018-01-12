import { Connect } from "redux-zero/preact";

import actions from "../../state/actions";

const mapToProps = ({ count, loading, payload }) => ({ count, loading, payload });

export default () => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {({ count, loading, payload, increment, decrement, getPayload }) => (
      <div>
        <h1>{count} - {loading.toString()} </h1>

        <p>getPayload response:</p>
        <pre>{ JSON.stringify(payload, null, 2) }</pre>

        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
          <button onClick={getPayload}>getPayload</button>
        </div>
      </div>
    )}
  </Connect>
);
