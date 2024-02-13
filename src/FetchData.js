import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';

export const fetchData = async (tablename) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, tablename));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID as a property
      ...doc.data(),
    }));
    return documents;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};