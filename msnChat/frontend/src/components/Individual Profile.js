import React, { useState } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const AvatarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const BioContainer = styled.div`
  flex: 3;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: #dedede;
  padding: 5px;
  border-radius: 5px;
`;

const BioText = styled.p`
  /* any styles you want to add for the bio text */
`;

export default function IndividualProfile() {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar
          src="/Users/zhangyichi/Downloads/Personal Project/msnChat/msnChat/msn/image/avatar/IMG_6292.JPG"
          alt="nishiyige"
        />
        <Button onClick={() => alert("Button clicked!")}>Click Me!</Button>
      </AvatarContainer>
      <BioContainer>
        <TagContainer>
          <Tag>Tag1</Tag>
          <Tag>Tag2</Tag>
          <Tag>Tag3</Tag>
        </TagContainer>
        <BioText>
          This is the bio text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </BioText>
      </BioContainer>
    </ProfileContainer>
  );
}
