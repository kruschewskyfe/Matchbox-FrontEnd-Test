import React from 'react';

import { Container, ContainerImage, ContainerInfo } from './styles';

const RankList = () => (
  // <Container>
  //   {repositories.map(repository => (
  //     <ul key={repository.data.id}>
  //       <li>
  //         <ContainerImage>
  //           <img src={repository.data.picture} alt={repository.data.name} />
  //         </ContainerImage>
  //         <ContainerInfo>
  //           <strong>{repository.data.name}</strong>
  //           <small>{repository.data.description}</small>
  //         </ContainerInfo>
  //       </li>
  //     </ul>
  //   ))}
  // </Container>
  <Container>
    <ul>
      <li>
        <ContainerImage>
          <img
            src="https://storage-matchboxbrasil.sfo2.digitaloceanspaces.com/diversos/frontend-test/f8c3500f39017602234a031caa64a8b4.png"
            alt="Caio Diego Henrique Moreira"
          />
        </ContainerImage>
        <ContainerInfo>
          <strong>Caio Diego Henrique Moreira</strong>
          <small>Product Designer</small>
        </ContainerInfo>
      </li>
      <li>
        <ContainerImage>
          <img
            src="https://storage-matchboxbrasil.sfo2.digitaloceanspaces.com/diversos/frontend-test/7b1dd3f58be97715e9e06475bb58fce5.png"
            alt="Isabella Esther Carolina da Mata"
          />
        </ContainerImage>
        <ContainerInfo>
          <strong>Isabella Esther Carolina da Mata</strong>
          <small>Marketing</small>
        </ContainerInfo>
      </li>
      <li>
        <ContainerImage>
          <img
            src="https://storage-matchboxbrasil.sfo2.digitaloceanspaces.com/diversos/frontend-test/70580002438b08c63286d08b7c43fb4c.png"
            alt="Alessandra Teresinha Fernandes"
          />
        </ContainerImage>
        <ContainerInfo>
          <strong>Alessandra Teresinha Fernandes</strong>
          <small>Recruitment Marketing</small>
        </ContainerInfo>
      </li>
      <li>
        <ContainerImage>
          <img
            src="https://storage-matchboxbrasil.sfo2.digitaloceanspaces.com/diversos/frontend-test/3404c4a70e7704009cd1915a349189f4.png"
            alt="Emilly Olivia das Neves"
          />
        </ContainerImage>
        <ContainerInfo>
          <strong>Emilly Olivia das Neves</strong>
          <small>Comunication</small>
        </ContainerInfo>
      </li>
      <li>
        <ContainerImage>
          <img
            src="https://storage-matchboxbrasil.sfo2.digitaloceanspaces.com/diversos/frontend-test/c97686edbeb8df774a567e9884f4d490.png"
            alt="Kevin Ruan Cauê Corte Real"
          />
        </ContainerImage>
        <ContainerInfo>
          <strong>Kevin Ruan Cauê Corte Real</strong>
          <small>Data Scientist</small>
        </ContainerInfo>
      </li>
    </ul>
  </Container>
);

export default RankList;
