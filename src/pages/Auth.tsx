import {
  AppShell,
  Card,
  Image,
  Tabs,
  Group,
  PasswordInput,
  TextInput,
  Button,
} from "@mantine/core";
import { useState } from "react";

export const AuthPage = (props: {
  onLoginFn: () => void
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        main: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Card
        style={{
          height: 600,
          width: 600,
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.43)",
        }}
      >
        <Card.Section>
          <Image
            src="https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?cs=srgb&dl=pexels-mohammad-danish-891059.jpg&fm=jpg"
            height={200}
          />
        </Card.Section>
        <Card.Section>
          <Tabs
            active={selectedTab}
            onTabChange={setSelectedTab}
            position="center"
          >
            <Tabs.Tab label="Sign up">
              <Group
                direction="column"
                style={{ width: "60%", margin: "0 auto" }}
              >
                <TextInput label="Email" style={{ width: "100%" }} />
                <PasswordInput label="Password" style={{ width: "100%" }} />
                <PasswordInput
                  label="Re-enter password"
                  style={{ width: "100%" }}
                />
                <Group direction="row" style={{ margin: "20px auto" }}>
                  <Button>Sign up</Button>
                </Group>
              </Group>
            </Tabs.Tab>
            <Tabs.Tab label="Log in">
              <Group
                direction="column"
                style={{ width: "60%", margin: "0 auto" }}
              >
                <TextInput label="Email" style={{ width: "100%" }} />
                <PasswordInput label="Password" style={{ width: "100%" }} />
                <Group direction="row" style={{ margin: "20px auto" }}>
                  <Button color="green" onClick={props.onLoginFn}>Log in</Button>
                </Group>
              </Group>
            </Tabs.Tab>
          </Tabs>
        </Card.Section>
      </Card>
    </AppShell>
  );
};
