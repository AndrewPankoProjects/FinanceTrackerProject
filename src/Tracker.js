import React from 'react';
import './TrackerStyles.css';
import TrackerFunction from "./Container/TrackerFunction.js";


export class Tracker extends React.Component {
  render() {
    return (
        <html >
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Tracker App</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"></link>
            </head>

            <body>
            <div id="page">
           
            <TrackerFunction />
                

                
            </div>
            </body>
            
        </html>
        
    
    );
  }
}

