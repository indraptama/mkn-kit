import db from "../firebase";
import { collectionData } from "rxfire/firestore";
import { startWith } from "rxjs/operators";


const clientRef = db.collection('client').orderBy('fullName', 'asc');
export const client$ = collectionData(clientRef, 'id').pipe(startWith([]));

export default client$;