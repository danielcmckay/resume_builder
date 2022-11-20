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

export const AuthPage = (props: { onLoginFn: () => void }) => {
  const [selectedTab, setSelectedTab] = useState<string>("0");
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
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.25)",
        }}
      >
        <Card.Section>
          <Image
            src="https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?cs=srgb&dl=pexels-mohammad-danish-891059.jpg&fm=jpg"
            height={200}
          />
        </Card.Section>
        <Card.Section>
          <Tabs defaultValue={"Log in"}>
            <Tabs.List>
              <Tabs.Tab value="Sign up">Sign up</Tabs.Tab>
              <Tabs.Tab value="Log in">Log in</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="Sign up">
              <Group align="column" style={{ width: "60%", margin: "0 auto" }}>
                <TextInput label="Email" style={{ width: "100%" }} />
                <PasswordInput label="Password" style={{ width: "100%" }} />
                <PasswordInput
                  label="Re-enter password"
                  style={{ width: "100%" }}
                />
                <Group align="row" style={{ margin: "20px auto" }}>
                  <Button>Sign up</Button>
                </Group>
              </Group>
            </Tabs.Panel>
            <Tabs.Panel value="Log in">
              <Group align="column" style={{ width: "60%", margin: "0 auto" }}>
                <TextInput label="Email" style={{ width: "100%" }} />
                <PasswordInput label="Password" style={{ width: "100%" }} />
                <Group align="row" style={{ margin: "20px auto" }}>
                  <Button color="green" onClick={props.onLoginFn}>
                    Log in
                  </Button>
                </Group>
              </Group>
            </Tabs.Panel>
          </Tabs>
        </Card.Section>
      </Card>
    </AppShell>
  );
};
