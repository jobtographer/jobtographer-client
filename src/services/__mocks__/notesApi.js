// notesActions.js
export const getNotes = () => {	
  return Promise.resolve([	
    {	
      title: '1',	
      body: 'BODY of note',	
      job: '1',	
      author: 'JOHN',	
      _id: '2000',	
    },	
    {	
      title: 'Note 2',	
      body: 'body 2',	
      job: '1',	
      author: 'JOHN',	
      _id: '2001',	
    }
  ]);	
};
