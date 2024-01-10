// src/components/FileExplorer/Folder/Folder.js
import React from 'react';

const Folder = ({ name, isFolder }) => {
  return (
    <div className={isFolder ? 'folder' : 'file'}>
      {isFolder ? <strong>{name}</strong> : name}
    </div>
  );
};

export default Folder;
Folder.css
css
Copy code
/* src/components/FileExplorer/Folder/Folder.css */
.folder {
  background-color: #3498db;
  color: white;
  padding: 8px;
  margin: 5px;
}

.file {
  background-color: #ecf0f1;
  padding: 8px;
  margin: 5px;
}
File.js
jsx
Copy code
// src/components/FileExplorer/File/File.js
import React from 'react';

const File = ({ name }) => {
  return (
    <div className="file">
      {name}
    </div>
  );
};

export default File;
File.css
css
Copy code
/* src/components/FileExplorer/File/File.css */
.file {
  background-color: #ecf0f1;
  padding: 8px;
  margin: 5px;
}
FileItem.js
jsx
Copy code
// src/components/FileExplorer/FileItem.js
import React from 'react';
import Folder from './Folder/Folder';
import File from './File/File';

const FileItem = ({ item }) => {
  return (
    <div>
      {item.isFolder ? (
        <Folder name={item.name} isFolder={item.isFolder} />
      ) : (
        <File name={item.name} />
      )}
    </div>
  );
};

export default FileItem;
FileItem.css
css
Copy code
/* src/components/FileExplorer/FileItem.css */
/* Add styles as needed */
FileExplorer.js
jsx
Copy code
// src/components/FileExplorer/FileExplorer.js
import React from 'react';
import FileItem from './FileItem';

const FileExplorer = ({ data }) => {
  return (
    <div className="file-explorer">
      {data.map((item, index) => (
        <FileItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FileExplorer;
FileExplorer.css
css
Copy code
/* src/components/FileExplorer/FileExplorer.css */
.file-explorer {
  display: flex;
  flex-direction: column;
}
/* Add styles as needed */
mockData.json
json
Copy code
// src/data/mockData.json
[
  {
    "name": "Documents",
    "isFolder": true,
    "items": [
      {
        "name": "Resume.pdf",
        "isFolder": false
      },
      {
        "name": "Projects",
        "isFolder": true,
        "items": [
          {
            "name": "Project1",
            "isFolder": true,
            "items": [
              {
                "name": "File1.txt",
                "isFolder": false
              },
              {
                "name": "File2.txt",
                "isFolder": false
              }
            ]
          },
          {
            "name": "Project2",
            "isFolder": true,
            "items": [
              {
                "name": "File3.txt",
                "isFolder": false
              }
            ]
          }
        ]
      },
      {
        "name": "Notes",
        "isFolder": true,
        "items": [
          {
            "name": "Note1.txt",
            "isFolder": false
          },
          {
            "name": "Note2.txt",
            "isFolder": false
          }
        ]
      }
    ]
  },
  {
    "name": "Images",
    "isFolder": true,
    "items": [
      {
        "name": "Nature",
        "isFolder": true,
        "items": [
          {
            "name": "Mountain.jpg",
            "isFolder": false
          },
          {
            "name": "Forest.jpg",
            "isFolder": false
          }
        ]
      },
      {
        "name": "Beach.jpg",
        "isFolder": false
      }
    ]
  }
]
App.js
jsx
Copy code
// src/App.js
import React from 'react';
import FileExplorer from './components/FileExplorer/FileExplorer';
import mockData from './data/mockData
