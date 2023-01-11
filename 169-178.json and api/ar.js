// const req = new XMLHttpRequest();
// req.open("GET", "./Artical.json");
// req.send();
// req.onreadystatechange = function () {
//   console.log(this.status);
//   console.log(this);
//   if (this.status === 200 && this.readyState === 4) {
//     console.log(this.response);
//     const Data2 = JSON.parse(this.responseText);
//     for (i = 0; i < Data2.length; i++) {
//       console.log(Data2[i].id);
//       console.log(Data2[i].content);
//     }
//   }
// };
// req.onloadend = function () {
//   console.log("Data loaded");
// };
const req = new XMLHttpRequest();
req.open("GET", "./Artical.json");
req.send();
req.onreadystatechange = function () {
  if (req.status === 200 && this.readyState === 4) {
    const mainData = JSON.parse(req.responseText);

    mainData.map((e) => {
      const data = document.querySelector("#data");
      const data2 = document.createElement("div");
      console.log(data);
      const ShowData = `<div>
      <h2>${e.title}</h2> 
      <p>Article Number ${e.id} Body</p>
      <p>Author: ${e.author}</p>
      <p>Category: ${e.category}</p>
    </div>`;
      data.insertAdjacentHTML("afterbegin", ShowData);
    });
    let updatedData = JSON.stringify(mainData);
  }
};
//////
<a
  href="http://url9216.customers.gumroad.com/ls/click?upn=lxUZP-2FJG4eH36wcqVLdRrl1a7xq5KDDGSmE6KrZYU0cB0HP-2FJa3B9lMvM-2F4-2F4xIvi3IH6PX4FylsQsCxf-2BhAl-2BeIPM8InLsWC4v5wrRfvmI-3DFjh__r-2FFhS89uQOpqvy0PrfG7ffD3my57VBv8U-2F9VxG-2BcP1DTOJZWEd6t19Uf3p-2BJwV4-2FlKOP4gAh1mZY4hbcf5CRFuTu0pt85troTedPSaV-2B87EyYBJ7Rc-2Fb-2BY-2FJYjjMf9yIzwuPLPr0WJ4Fc2RqtSuoCtme4ePdNXo6J-2FN-2BwoBh827oaTHQYMvw8CGYjnWFNH58EqL920ex684BJGiJpYeJsS1PeEc-2F99Yd9QkUL4ftOmiZIz-2F0RJk9nc1JkmxzMBDbl8Drbw-2BsIUnE0zL5DxhlhPf2Ls7CrScLybCVy9ZkHA2WzbXnfHu-2BWI2cOpW2gl2OpMiSk-2Fbwdm344aqlS8o5rQv6CMfCTuN1sbIaKG0Ai-2B8tiGlyskMn27qEa8UTYwL6"
  style="background-color:#000;font-size:16px;line-height:1.5;color:#fff;border-radius:4px;font-family:Mabry Pro,sans-serif;display:block;text-decoration:none;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;min-width:0;text-align:center;width:initial;margin:0;padding:12px 16px;border:1px solid #000"
  target="_blank"
  data-saferedirecturl="https://www.google.com/url?q=http://url9216.customers.gumroad.com/ls/click?upn%3DlxUZP-2FJG4eH36wcqVLdRrl1a7xq5KDDGSmE6KrZYU0cB0HP-2FJa3B9lMvM-2F4-2F4xIvi3IH6PX4FylsQsCxf-2BhAl-2BeIPM8InLsWC4v5wrRfvmI-3DFjh__r-2FFhS89uQOpqvy0PrfG7ffD3my57VBv8U-2F9VxG-2BcP1DTOJZWEd6t19Uf3p-2BJwV4-2FlKOP4gAh1mZY4hbcf5CRFuTu0pt85troTedPSaV-2B87EyYBJ7Rc-2Fb-2BY-2FJYjjMf9yIzwuPLPr0WJ4Fc2RqtSuoCtme4ePdNXo6J-2FN-2BwoBh827oaTHQYMvw8CGYjnWFNH58EqL920ex684BJGiJpYeJsS1PeEc-2F99Yd9QkUL4ftOmiZIz-2F0RJk9nc1JkmxzMBDbl8Drbw-2BsIUnE0zL5DxhlhPf2Ls7CrScLybCVy9ZkHA2WzbXnfHu-2BWI2cOpW2gl2OpMiSk-2Fbwdm344aqlS8o5rQv6CMfCTuN1sbIaKG0Ai-2B8tiGlyskMn27qEa8UTYwL6&amp;source=gmail&amp;ust=1655464521116000&amp;usg=AOvVaw3H7QgRjrMP_eggb4XXz7Lq"
>
  View content
</a>;
