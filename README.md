# Documents-List-Mapper  
The Documents-List-Mapper app provides block responsible for displaying list of document details from Master Data through a JSON schema.<br>

  For example : In the below image, a list of dealer details is being rendered with a filter by Zip no.

![image](https://echidna.vteximg.com.br/arquivos/Documents-list-mapper.PNG)

## Configuration
:warning: Before configuring the **documents-list-mapper** block in your theme, make sure you've already configured a <strong>JSON schema in Master Data</strong>, otherwise the list details will not be displayed properly.

#### Steps to configure JSON schema in Master Data:
1.  Create a **data entity** of your choice in masterdata.
2.  Create the following fields ( ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) with the names as shown below) for the data enitity.  
  
| Field Name | Field Type |
| --- | --- |
| `name` | text  |
| `address` | text |
| `phone` | telephone  |
| `zipNo` | integer |
| `hostURL` | text |
| `locationURL` | text |

3.  Run the [Get Schemas API](https://developers.vtex.com/vtex-rest-api/reference/schemas#getschemas), replacing the `data_entity_name` value with the one you just created.

4.  Send a request to Master Data's **[Save Schema by name API](https://developers.vtex.com/vtex-rest-api/reference/schemas#saveschemabyname)**, copying the required details obtained in step 3 in the request's body and using it as a default when making any required changes to the properties (according to your store’s scenario).
5.  Create a document (as per the schema created in step 4) in masterdata using [Create new document API](https://developers.vtex.com/vtex-rest-api/reference/documents#createnewdocument).


## Usage

1. Add the documents-list-mapper app to your theme's dependencies in the manifest.json,<br>

  For example:<br>
  
 ```JSON
  "dependencies": 
  {
  "echidna.documents-list-mapper": "0.x"
  }
```
2. Add the block documents-list-mapper to the desired .json file and configure the props(refer the table below) as per your stores scenario,<br>
  for example:<br>
  
  ```JSON
  {
  "store.custom#dealers-list": {
    "blocks": ["documents-list-mapper"]
  },
  "documents-list-mapper": {
    "props": {
    "dataEntityName": "DealersList",
    "schemaName": "dealersList",
    "listName": "Dealer",          
    "cardShadow": false,
    "buttonColor": "#c32323",
    "blockClass": "dealers"
    }
  }
}
  ```
  
 ###  documents-list-mapper props:
  
| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `dataEntityName`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)   The [entity](https://help.vtex.com/tutorial/creating-data-entity--tutorials_1265) in Master Data where the document will be saved.             | `undefined`              |
| `schemaName`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) The JSON schema name that will be used. The schema name is set in the API's request to create it in Master Data.| `undefined`
| `listName`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) The name of the list that will be rendered in the UI| `undefined`
| `cardShadow`  | `boolean` | Box shadow displayed for each card.| `false`
| `buttonColor`  | `string` | The background color of the button.| `#c32323`|


## Customization

Use the below mentioned CSS handles to customize the app according to your stores scenario, for further information on customization using CSS handles follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- |
| `container` |
| `container_input` |
| `container_name` |
| `lable` |
| `buttn` |
| `card` |
| `details` |
| `containerLocation` |
| `location` |
| `locationMap` |
| `location_img` |
| `buttonlink` |

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/reena-p"><img src="https://avatars1.githubusercontent.com/u/42587916?v=4" width="100px;" alt=""/><br /><sub><b>Reena Panwar</b></sub></a><br /><a href="https://github.com/Ashwathnarayanar-tech/documents-list-mapper/commits?author=reena-p" title="Code">💻</a></td>    
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->




