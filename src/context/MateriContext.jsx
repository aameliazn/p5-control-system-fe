import React from 'react'
import Materi from '@/components/materi/dataClass'
export default function MateriContext(req, res) {
 if(req.method === 'DELETE') {
    const itemId = parseInt(req.query.id, 10);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
      res.status(200).end(); 
    } else {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
 }
}
