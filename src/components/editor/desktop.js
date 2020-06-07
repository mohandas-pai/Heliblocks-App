import React, { useState } from "react";
import Settings from "./settings";
import Title from "./title";
import Save from "./save";
import { CssEditor, HtmlEditor } from "./codeEditors";
import ScreenPreview from "./screenPreview";
import { UserMenu } from "components/menus";
import Logo from "components/logo";
import { Box, Flex, useTheme, Stack } from "@chakra-ui/core";
import { Container, Section, Bar } from "react-simple-resizer";

const Divider = ({ style, ...rest }) => {
  const theme = useTheme();
  return (
    <Bar
      size={4}
      style={{ background: theme.colors.gray[100], ...style }}
      {...rest}
    />
  );
};

const DesktopEditor = () => {
  const [dragging, setDragging] = useState(false);
  const { colors } = useTheme();

  return (
    <>
      <Box borderBottomWidth="1px" px="4" data-testid="desktop-editor">
        <Flex height="56px" justifyContent="space-between" alignItems="center">
          <Logo />
          <Title />
          <Stack isInline spacing={2}>
            <Settings />
            <Save />
            <Flex>
              <UserMenu />
            </Flex>
          </Stack>
        </Flex>
      </Box>
      <Box as={Container} h="calc(100vh - 56px)">
        <Section defaultSize={620} minSize={100}>
          <Container vertical={true} style={{ height: "100%" }}>
            <Section minSize={48}>
              <HtmlEditor />
            </Section>
            <Divider />
            <Section minSize={48}>
              <CssEditor />
            </Section>
          </Container>
        </Section>
        <Divider onStatusChanged={setDragging} />
        <Section
          style={{
            borderLeft: `1px solid ${colors.gray["200"]}`,
            background: "#fff",
            pointerEvents: dragging ? "none" : "auto"
          }}
          minSize={220}
        >
          <ScreenPreview />
        </Section>
      </Box>
    </>
  );
};

export default DesktopEditor;
