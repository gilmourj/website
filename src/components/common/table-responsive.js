import React from 'react'
import classnames from 'classnames'
import { FieldName } from '~components/utils/field-name'
import { FormatNumber } from '~components/utils/format'
import tableStyles from './table.module.scss'
import tableResponsiveStyles from './table-responsive.module.scss'

const TableResponsive = ({ labels, data }) => (
  <table className={classnames(tableStyles.table, tableResponsiveStyles.table)}>
    <thead>
      <tr>
        {labels.map(({ label, field }) => (
          <th scope="col">{label || <FieldName field={field} />}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr>
          {labels.map(({ field, label, format, isNumeric, noWrap }) => (
            <td className={classnames(noWrap && tableResponsiveStyles.noWrap)}>
              <span className={tableResponsiveStyles.label}>
                {label || <FieldName field={field} />}
              </span>
              <span className={tableResponsiveStyles.value}>
                {isNumeric ? (
                  <FormatNumber number={row[field]} />
                ) : (
                  <>{format ? format(row[field]) : row[field]}</>
                )}
              </span>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default TableResponsive