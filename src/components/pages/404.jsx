import { Link } from "react-router-dom";





const Page404 = () => {
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/page-not-found-with-people-connecting-a-plug-concept-illustration_114360-1927.jpg?w=1380&t=st=1675186531~exp=1675187131~hmac=3dc9907a2609d76b5610484177130acb7a330d9172ca2bebb610af24cacbdbf0" width={"100%"} alt="page 404" />
            <Link style={{ "display": 'block', "textAlign": "center", "fontWeight": 'bold', "fontSize": '24px', "marginTop": "30px" }}
            to='/comics'>Back to main page</Link>
        </div>
    );
};

export default Page404;