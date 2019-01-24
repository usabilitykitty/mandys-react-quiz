import React from 'react';
import Result from '../Result/Result';

class PreviewResults extends React.Component {  
  render() {
    return (
      <div className="results">
      {this.props.resultsPreview !== undefined && this.props.resultsPreview.sort((a, b) => {
          return a.id < b.id ? -1 : 1;
        })
        .map(result => {
        return (
          <Result 
            key={result.id}
            resultQuestion={result.value}
            resultAnswer={result.answer} />
        )
      })}
      </div>
    )
  }
}

export default PreviewResults;