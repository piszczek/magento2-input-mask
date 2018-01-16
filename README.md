# Magento 2 InputMask plugin

This simply plugin allows add input mask configuration to form ui component configuration.

Based on [Imask](https://github.com/uNmAnNeR/imaskjs) and support most of the configuration (except passing js function as a parameters).

# Installation
```
composer require piszczek/magento2-inputmask
```
# Example

Location
``app/code/Your/Module/view/adminhtml/ui_component/your_module_model_form.xml``
```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    ....
    <fieldset name="General">
        ...
        <field name="zip_code" formElement="input">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="inputMask" xsi:type="array">
                        <!-- pass your simple mask here-->
                        <item name="mask" xsi:type="string">00-000</item>
                    </item>
                </item>
            </argument>
            <settings>
                <validation>
                    <rule name="required-entry" xsi:type="boolean">true</rule>
                </validation>
                <label translate="true">Zip Code</label>
                <placeholder>00-000</placeholder>
            </settings>
        </field>
        ...
    </fieldset>
</form>
```

This plugin is lazy load - inputmask.min.js is only load when is required by one of fields in page.
