import { ApiDocumentation } from "Elucidate/Documentation/ApiDocumentation";
import DefaultRoute from "./Docs/DefaultRoute";

let endpointCollections = [DefaultRoute];

export default ApiDocumentation.loadEndpoints(endpointCollections);
