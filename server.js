const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const config = require('./config');
 
const app = express();
const port = 3003;
 
// Enable CORS for all routes
app.use(cors());
 
 
app.get('/data', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT TOP (20) * FROM [SalesLT].[Customer]`;
    res.json(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
    res.status(500).send('Server Error');
  } finally {
    await sql.close();
  }
});
 
app.get('/data2', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`
          SELECT
            p.Name AS ProductName,
            p.Color,
            p.Size,
            p.Weight
          FROM
            SalesLT.Product p
          INNER JOIN
            SalesLT.ProductCategory pc
          ON
            p.ProductCategoryID = pc.ProductCategoryID;
        `;
        // console.log(result);
        res.json(result.recordset);
      } catch (err) {
        console.error('SQL error', err);
      } finally {
        await sql.close();
      }
  });
 
app.listen(port, () => {
  try{
    console.log(`Server successfully running at http://localhost:${port}`);
  }catch(err){
    console.log("err",err)
  }
});