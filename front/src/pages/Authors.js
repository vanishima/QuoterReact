import {useState, useEffect} from "react";

// Element
import Layout from "../components/Layout";
import Search from "../components/Search";
import AuthorsList from "../components/authors/AuthorsList";
import FormCreateAuthor from "../components/authors/FormCreateAuthor";
import DashboardAuthors from "../components/DashboardAuthors";
import DashboardBooks from "../components/DashboardBooks";

// API
import authorsAPI from "../api/authorsAPI";

import "../styles/authors.css";

async function drawAuthors(setQuotes) {
  const result = await authorsAPI.getAuthors();
  if (result.ok) {
    setQuotes(result.authors);
  } else {
    alert(result.msg);
  }
}

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.log("### AuthorsList EFFECT ###");
    drawAuthors(setAuthors);
  }, []);

  const createAuthor = async(name, category, url)=>{
    console.log("ready to create author", name, category, url);
    const newAuthor = {
      url: url,
      category: category,
      name: name,
    };

    console.log("newAuthor", newAuthor);

    const result = await authorsAPI.updateAuthor(newAuthor);
    console.log("result",result);
    if (result.ok) {
      newAuthor._id = result._id;
      newAuthor.books = [];
      const url = new URL(document.location);

      // in Authors page
      if (url.pathname === "/author") {
        setAuthors([newAuthor, ...authors]);
      // in AuthorDetail page
      } else {
        setAuthors([newAuthor, ...authors]);
        // navigate("/author?id=" + result._id); // creating new author
      }
    }

  }

  return (
    <Layout>
      <div className="content-page">
        <div className="row">
          <div className="col-8">
            <Search />
            
            <AuthorsList authors={authors}/>
          </div>
          
          <div className="col-4">
            <DashboardBooks/>
            <DashboardAuthors/>
            <div className="card">
              <FormCreateAuthor createAuthor={createAuthor}/>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </Layout>
  );
};

export default Authors;
