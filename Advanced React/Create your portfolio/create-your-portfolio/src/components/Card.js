import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import * as Chakra from '@chakra-ui/react';
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Chakra.Card>
      <Image borderRadius="5px" src={imageSrc}/>
      <Chakra.CardBody>
        <VStack spacing={2} align={faLeftLong}>
          <Heading fontSize="1rem">{title}</Heading>
          <Text fontSize="0.9rem" color="gray">{description}</Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </Chakra.CardBody>
    </Chakra.Card>
  );
};

export default Card;
