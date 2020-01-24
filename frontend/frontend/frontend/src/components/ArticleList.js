import React, { Component } from "react";
import Article from "./Article";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "placeholder",
          created_at: "null",
          message: "placeholder"
        }
      ]
    };
  }

  render() {
    fetch("http://localhost:8000/api/articles.json")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          data: myJson
        });
      });

    // if (article_info.length > 0) {
    // } else {
    // 	article_info = [
    // 		{
    // 			title: 'placeholder'
    // 		}
    // 	];
    // }

    return (
      <div>
        {this.state.data.map(article => {
          // return <h1>{article.title}</h1>;
          return <Article content={article} />;
        })}
      </div>
    );
  }
}

export default ArticleList;
// {new_array.map((skill, index) => {
//     return(
//     <tr key={index}>
//     <td><img className="stat_icon" src={img_array[index]} alt="Stats Symbol" />{skill.name}</td>
//     <td>{skill.virtual}</td>
//     <td>{skill.xp}</td>
//     <td>{skill.rank}</td>
//   </tr>
//   )
//   })}
