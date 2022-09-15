import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "reactstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const loadData = async () => {
    try {
      const resp = await axios("https://restcountries.com/v3.1/all");
      setCountries(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderCountries = () => {
    const arr = countries.sort((a, b) => {
      if (a.name.common > b.name.common) {
        return 1;
      } else if (a.name.common < b.name.common) {
        return -1;
      }
      return 0;
    });
    console.log(arr);
    setCountries([...arr]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th onClick={orderCountries}>Name</th>
            <th>Population</th>
            <th>Capital City</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>
                <img src={country.flags.png} width="100px" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country?.capital}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
