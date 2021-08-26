import React from 'react';
import { Box, Button, Paragraph, Heading } from 'grommet';
import Page from '../components/Page';
import Item from './Components/Item';
import { GenericBoolFalse } from '../utils/genericPropExamples';

import {
  ComponentDoc,
  Properties,
  Property,
  PropertyValue,
  Description,
  Example,
  ThemeDoc,
} from '../components/Doc';

export default () => (
  <Page>
    <ComponentDoc
      name="Notification"
      availableAt={[
        {
          url: 'https://storybook.grommet.io',
          badge: 'https://cdn-images-1.medium.com/',
          label: 'Storybook',
        },
        {
          url: 'https://codesandbox.io/s/github',
          badge: 'https://codesandbox.io/',
          label: 'CodeSandbox',
        },
      ]}
      description="deliver transparent clarity for task and
      system statuses"
    >
      <Box
        alignSelf="start"
        margin={{ top: 'medium' }}
        pad="medium"
        round
        background="light-3"
      >
        <Paragraph margin="none">
          The Notification component is a work-in-progress. This page is focused
          on the first iteration of Notifications, which is mainly the Toast
          Notification. We are currently exploring and ideating on banners,
          badging, bells, and inline, global and system notifications to include
          in future versions.
        </Paragraph>
      </Box>
      <Heading>Toast Notifications</Heading>
      <Paragraph size="large">
        Toast notifications are used to communicate low severity level
        information to users in an unobtrusive way. They should be used
        sparingly to display low attention messages and statuses that do not
        require user action.
      </Paragraph>
      <Paragraph size="large">
        If there are multiple toast notifications, you should deal with them by
        having only one toast present at a time. Once the first toast is
        dismissed or timed out, the next one should appear.
      </Paragraph>
      <Properties>
        <Property name="title">
          <Description>
            A string that represents the title of a Notification.
          </Description>
          <PropertyValue type="string">
            <Example>"Your session has expired."</Example>
          </PropertyValue>
        </Property>

        <Property name="message">
          <Description>
            A custom message displayed under the title. Provides more
            information about the Notification.
          </Description>
          <PropertyValue type="string">
            <Example>"You were signed out due to inactivity."</Example>
          </PropertyValue>
        </Property>

        <Property name="status">
          <Description>
            An indicator that relays the current status of a Notification.
          </Description>
          <PropertyValue type="string">
            <Example defaultValue>"unknown"</Example>
            <Example>"normal"</Example>
            <Example>"warning"</Example>
            <Example>"critical"</Example>
          </PropertyValue>
        </Property>

        <Property name="toast">
          <Description>
            A boolean flag that indicates whether or not the Notification is a
            Toast Notification.
          </Description>
          <GenericBoolFalse />
        </Property>

        <Property name="onClose">
          <Description>
            Click handler. Not setting this property causes the Notification to
            not have a close button.
          </Description>
          <PropertyValue type="function">
            <Example>{`(...args: any[]) => any`}</Example>
          </PropertyValue>
        </Property>
      </Properties>

      <ThemeDoc>
        <Property name="notification.container">
          <Description>
            Any valid Box prop for the Notification container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'background.color' is used for the container color.
            </Description>
            <Example defaultValue>
              {`
{
    pad: { horizontal: 'small', vertical: 'xsmall' },
    background: {
        color: 'background-front',
    }
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.toast.container">
          <Description>
            Any valid Box prop for the Toast Notification container.
          </Description>
          <PropertyValue type="object">
            <Description>
              'width' is used for the default width of a Toast Notification.
            </Description>
            <Example defaultValue>
              {`
{
    elevation: 'medium',
    round: 'xsmall',
    width: 'medium'
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.toast.layer">
          <Description>
            Any valid Layer prop for the Toast Notification layer.
          </Description>
          <PropertyValue type="object">
            <Description>
              'position' is used for the default positioning of a Toast
              Notification.
            </Description>
            <Example defaultValue>
              {`
{
    position: 'top',
    margin: 'medium',
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.iconContainer">
          <Description>Any valid Box prop for the icon container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
    pad: { right: 'small' },
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.textContainer">
          <Description>Any valid Box prop for the text container.</Description>
          <PropertyValue type="object">
            <Example defaultValue>
              {`
{
    gap: 'medium'
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.title">
          <Description>Any valid Text prop for the title text.</Description>
          <PropertyValue type="object">
            <Description>
              'color' is used for the text color and 'weight' for the weight of
              the title.
            </Description>
            <Example defaultValue>
              {`
{
    weight: 'bold',
    color: 'text'
}
                `}
            </Example>
          </PropertyValue>
        </Property>

        <Property name="notification.message">
          <Description>Any valid Text prop for the message text.</Description>
          <PropertyValue type="object">
            <Description>'color' is used for the message color.</Description>
            <Example defaultValue>"text"</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.close.icon">
          <Description>The default close button icon.</Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<FormClose />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.close.color">
          <Description>The color of the close button icon.</Description>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example defaultValue>
              {`
{
    light: 'black',
    dark: 'white',
}
                    `}
            </Example>
          </PropertyValue>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example>"brand"</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.unknown.icon">
          <Description>
            The default icon for an unknown status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusUnknownSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.unknown.color">
          <Description>The color of the unknown status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-unknown"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.normal.icon">
          <Description>
            The default icon for a normal status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusGoodSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.normal.color">
          <Description>The color of the normal status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-ok"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.warning.icon">
          <Description>
            The default icon for a warning status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusWarningSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.warning.color">
          <Description>The color of the warning status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-warning"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.critical.icon">
          <Description>
            The default icon for a critical status Notification.
          </Description>
          <PropertyValue type="node">
            <Example defaultValue>{`<StatusCriticalSmall />`}</Example>
            <Example>{`<Icon />`}</Example>
          </PropertyValue>
          <PropertyValue type="SVG">
            <Example>{`<svg>...</svg>`}</Example>
          </PropertyValue>
        </Property>

        <Property name="notification.critical.color">
          <Description>The color of the critical status icon.</Description>
          <PropertyValue type="string">
            <Description>A hex, name, or rgb value.</Description>
            <Example defaultValue>"status-critical"</Example>
          </PropertyValue>
          <PropertyValue type="object">
            <Description>
              An object with a color for dark and light modes.
            </Description>
            <Example>{`{ dark: "string", light: "string" }`}</Example>
          </PropertyValue>
        </Property>
      </ThemeDoc>
    </ComponentDoc>
  </Page>
);

export const NotificationItem = ({ name, path }) => (
  <Item name={name} path={path} center>
    <Button label="Button" />
  </Item>
);

NotificationItem.propTypes = Item.propTypes;
